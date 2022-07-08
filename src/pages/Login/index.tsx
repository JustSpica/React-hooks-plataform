import { Input, Button } from 'components';

export function Login() {
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
            <Button type="button" outline>
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
