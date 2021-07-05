import { instance } from '../infrastructureVariables';

class MailService {
  public static async sendMail(
    listId: string,
    title: string,
    content: string
  ): Promise<void> {
    const body: URLSearchParams = new URLSearchParams();
    body.append('uuid', listId || '');

    console.log((await instance.post('/lists', body)).data);
  }
}

export default MailService;
