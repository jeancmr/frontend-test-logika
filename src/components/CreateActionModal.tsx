import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import type { CreateActionForm } from '../types/types';
import { Switch } from './Switch';
import { createAction } from '../api/utils/action.api';
import toast from 'react-hot-toast';

interface Props {
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
  getActions: () => Promise<void>;
}

export const CreateActionModal = ({ handleModal, getActions }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CreateActionForm>({
    defaultValues: {
      status: true,
    },
  });

  const onSubmit: SubmitHandler<CreateActionForm> = async (dataForm) => {
    const token = localStorage.getItem('token');

    await createAction(dataForm, token);
    toast.success('Acción creada con éxito');
    reset();

    getActions();
  };

  return (
    <div className="fixed inset-0 bg-blue backdrop-brightness-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
        <button
          className="font-bold cursor-pointer self-end"
          onClick={() => handleModal((prev) => !prev)}
        >
          &#10005;
        </button>

        <h2 className="text-indigo-950 text-3xl font-bold self-start">Crear categoría</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="block text-sm mb-1 font-medium text-gray-900">
              Nombre de la categoría*
            </label>
            <input
              type="text"
              id="name"
              placeholder="Escribe el nombre de la buena acción"
              className="mb-1 w-full py-2.5 px-3 rounded-sm border border-gray-500"
              {...register('name', { required: 'Nombre es requerido' })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-2.5">
            <label className="block text-sm mb-1 font-medium text-gray-900">
              Descripción de la buena acción*
            </label>
            <textarea
              id="description"
              placeholder="Agregar descripción"
              className="mb-1 w-full py-2.5 px-3 rounded-sm border border-gray-500"
              {...register('description', { required: 'Descripción es requerida' })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="block text-sm mb-1 font-medium text-gray-900">Logo*</label>
            <input
              type="file"
              id="icon"
              placeholder="Carga archivo"
              className="mb-1 w-full py-2.5 px-3 rounded-sm border border-gray-500"
              {...register('icon', { required: 'Logo es requerido' })}
            />
            {errors.icon && <p className="text-red-500 text-sm">{errors.icon.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1 font-medium text-gray-900">Color*</label>
            <input
              type="text"
              id="color"
              placeholder="Registra color codigo HEX"
              className="mb-1 w-full py-2.5 px-3 rounded-sm border border-gray-500"
              {...register('color', { required: 'Color es requerido' })}
            />
            {errors.color && <p className="text-red-500 text-sm">{errors.color.message}</p>}
          </div>

          <div className="flex items-center gap-3 mb-8">
            <Controller
              name="status"
              control={control}
              render={({ field }) => <Switch value={field.value} onChange={field.onChange} />}
            />
            <span className="text-sm">Activo</span>
          </div>

          <button
            className="rounded-sm py-2.5 px-20 cursor-pointer font-medium self-center bg-white text-indigo-950 border-2 border-indigo-950 hover:bg-gray-200 transition-colors mr-4"
            onClick={() => handleModal((prev) => !prev)}
          >
            Cancelar
          </button>

          <button className="rounded-sm py-2.5 px-20 cursor-pointer font-medium self-center border-2 border-amber-100 bg-indigo-950 text-white hover:bg-blue-900 transition-colors">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};
