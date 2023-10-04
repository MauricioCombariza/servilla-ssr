import { NextApiRequest, NextApiResponse } from "next";
import { useAuth } from "../../Auth";
import { LoginType } from "../../Hooks/usePostLogin";
import { AuthContextProps } from "../../Auth";
import { usePostLogin } from "../../Hooks/usePostLogin";

interface FormData {
  auth: AuthContextProps;
  email: string;
  password: string;
  API: string;
}

async function login(req: NextApiRequest, res: NextApiResponse) {
  const auth = useAuth() as AuthContextProps;
  const formData = new FormData(req.body);
  const data: FormData = {
    auth,
    API: 'http://127.0.0.1:8000/user/login',
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  const response = await usePostLogin(data);

  if (response !== undefined) {
    res.status(400).json({ error: response });
  } else {
    res.status(200).json({ success: true });
  }
}

export default login;