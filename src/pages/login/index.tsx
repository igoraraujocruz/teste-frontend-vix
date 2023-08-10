import { Content, Container } from './styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../services/hooks/useAuth';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

interface SignInFormData {
  name: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  name: yup.string().required('Username obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Login() {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { signIn } = useAuth();

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    try {
      await signIn({
        name: values.name,
        password: values.password,
      });

      toast.success('Acesso Autorizado');
      reset();
    } catch (err) {
      toast.error('Ocorreu um erro...');
    }
  };

  return (
    <Container>
      <Content>
        <Link href={'/'}>
          <div className="linkBack">
            <BiArrowBack size={20} />
            <p>Voltar para tela inicial</p>
          </div>
        </Link>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <label htmlFor={'name'}>Nome</label>
          <input
            name="name"
            placeholder="Nome"
            id="name"
            {...register('name')}
          />
          <label htmlFor={'password'}>Senha</label>
          <input
            name="password"
            placeholder="Senha"
            id="password"
            {...register('password')}
          />

          <button type="submit">Acessar</button>
        </form>
      </Content>
    </Container>
  );
}
