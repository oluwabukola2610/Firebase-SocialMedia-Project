import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from 'react-router-dom'
type dataScript = {
  tittle: string;
  description: string;
};
export const FormPost = () => {
    const navigate = useNavigate()
  const [user] = useAuthState(auth);

  const schema = yup.object().shape({
    tittle: yup.string().required("You must add a tittle"),
    description: yup.string().required("Description is needed"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataScript>({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "post");

  const submit = async (data: dataScript) => {
    await addDoc(postRef, {
      ...data,
      userName: user?.displayName,
      userId: user?.uid,
    });
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder="Tittle..." {...register("tittle")} />
      <p style={{ color: "red" }}>{errors.tittle?.message}</p>
      <textarea placeholder="Descrip...." {...register("description")} />
      <p style={{ color: "red" }}>{errors.description?.message}</p>

      <input type="Submit" className="logout"/>
    </form>
  );
};
