
import { productType } from '~/interfaces/product'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {
  onAdd: (product: productType) => void
}

const ProductAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<productType>()
  const onSubmit: SubmitHandler<productType> = (data) => {
    console.log(data)
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Title'
            {...register('title', { required: true })}
          />
          {errors.title && <span>This field is required</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            className='form-control'
            id='price'
            placeholder='Price'
            {...register('newprice', { required: true })}
          />
          {errors.newprice && <span>This field is required</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder='Description'
            {...register('title')}
          />
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductAdd