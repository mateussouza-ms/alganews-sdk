import { Payment, Post } from "../@types";
import Service from "../Service";
import { generateQueryString } from "../utils";

export class PaymentService extends Service {
  static getAllPayments(search: Payment.Query) {
    const queryString = generateQueryString(search);
    return this.Http.get<Payment.Paginated>(`/payments${queryString}`).then(
      this.getData
    );
  }

  static insertNewPayment(payment: Payment.Input) {
    return this.Http.post<Payment.Detailed>("/payments", payment).then(
      this.getData
    );
  }

  static approvePaymentsBatch(paymentIds: number[]) {
    return this.Http.put<{}>("/bulk-approvals", paymentIds).then(this.getData);
  }

  static getPaymentPreview(paymentInfo: Payment.PreviewInput) {
    return this.Http.post<Payment.Preview>(
      "/payments/previews",
      paymentInfo
    ).then(this.getData);
  }

  static approvePayment(paymentId: number) {
    return this.Http.put<{}>(`/payments/${paymentId}/approval`).then(
      this.getData
    );
  }

  static getExistingPayment(paymentId: number) {
    return this.Http.get<Payment.Detailed>(`/payments/${paymentId}`).then(
      this.getData
    );
  }

  static removeExistingPayment(paymentId: number) {
    return this.Http.delete<{}>(`/payments/${paymentId}`).then(this.getData);
  }

  static getExistingPaymentPosts(
    paymentId: number,
    query?: { sort: Payment.Query["sort"] }
  ) {
    const queryString = query ? generateQueryString(query) : "";
    return this.Http.get<Post.WithEarnings[]>(
      `/payments/${paymentId}/posts${queryString}`
    );
  }
}
