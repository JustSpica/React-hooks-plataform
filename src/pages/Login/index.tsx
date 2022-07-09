import { useNavigate } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

import { Input, Button, ButtonGithub } from 'components';

import { auth, firebase } from 'services/firebase';
import { useAuth } from 'hooks';

export function Login() {
  const navigate = useNavigate();

  const { setToken } = useAuth();

  async function handleSignInWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      const credentials = result.credential as firebase.auth.OAuthCredential;
      setToken(credentials.accessToken as string);

      navigate('/');
    });
  }

  return (
    <div className="w-screen h-screen bg-blur bg-cover bg-no-repeat grid grid-cols-2">
      <div className="">
        <div></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-sm p-8 bg-gray-900 rounded-md shadow-md shadow-black">
          <h1 className="text-2xl font-bold">React Hooks</h1>
          <p className="text-sm text-gray-400 mt-2 mb-12">
            Plataforma criada sobre React Hooks como estudo.
          </p>
          <form className="w-full space-y-12">
            <div className="w-full space-y-8">
              <Input placeholder="Email" />
              <Input placeholder="Senha" isPassword />
            </div>
            <Button type="button">Entrar</Button>
          </form>
          <ButtonGithub onClick={handleSignInWithGithub}>
            Entre com o Github <BsGithub className="ml-4" size={20} />
          </ButtonGithub>
          <strong className="block text-sm text-gray-400 text-center mt-12">
            (Foi implementado apenas o login com o Github)
          </strong>
        </div>
      </div>
    </div>
  );
}
