import { User } from "../@types";
import Service from "../Service";

export class UserService extends Service {
  static getAllEditors() {
    return this.Http.get<User.EditorSummary[]>("/users/editors").then(
      this.getData
    );
  }

  static getExistingEditor(editorId: number) {
    return this.Http.get<User.EditorDetailed>(
      `/users/editors/${editorId}`
    ).then(this.getData);
  }

  static getDetailedUser(userId: number) {
    return this.Http.get<User.Detailed>(`/users/${userId}`).then(this.getData);
  }

  static updateExistingUser(userId: number, user: User.Input) {
    return this.Http.put<User.Detailed>(`/users/${userId}`, user).then(
      this.getData
    );
  }

  static getAllUsers(query?: User.Query) {
    return this.Http.get<User.Summary[]>(`/users${query}`).then(this.getData);
  }

  static insertNewUser(user: User.Input) {
    return this.Http.post<User.Detailed>("/users", user).then(this.getData);
  }

  static activateExistingUser(userId: number) {
    return this.Http.put<{}>(`/users/${userId}/activation`).then(this.getData);
  }

  static deactivateExistingUser(userId: number) {
    return this.Http.delete<{}>(`/users/${userId}/activation`).then(
      this.getData
    );
  }
}
