import { v4 as uuid } from "uuid";
import { File } from "../@types";
import Service from "../Service";

export class FileService extends Service {
  private static getSignedUrl(fileInfo: File.UploadRequestInput) {
    return this.Http.post<File.UploadRequest>("/upload-requests", fileInfo)
      .then(this.getData)
      .then((data) => data.uploadSignedUrl);
  }

  private static uploadFileToSignedUrl(signedUrl: string, file: File) {
    return this.Http.put<{}>(signedUrl, file, {
      headers: { "Content-Type": file.type },
    }).then(this.getData);
  }

  private static getFileExtension(fileName: string) {
    const [extension] = fileName.split(".").slice(-1);

    return extension;
  }

  private static generateRandomFileName(extension: string) {
    return `${uuid()}.${extension}`;
  }

  static async upload(file: File) {
    const extension = this.getFileExtension(file.name);
    const fileName = this.generateRandomFileName(extension);

    const signedUrl = await this.getSignedUrl({
      fileName,
      contentLength: file.size,
    });

    await this.uploadFileToSignedUrl(signedUrl, file);

    return signedUrl.split("?")[0];
  }
}
