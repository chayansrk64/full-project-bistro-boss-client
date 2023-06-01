import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_image_upload_token;
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2'

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit, reset} = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
            if(imgResponse.success){
                const img_URL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:img_URL};
                console.log(newItem);

                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data);
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Item Added Successfully!',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

            }
        })
       
    };
    
    return (
        <div className="w-full px-10">
            <SectionTitle
            subHeading="What's new?"
            heading="Add an item"
            ></SectionTitle>
           

        
          <form onSubmit={handleSubmit(onSubmit)} >

            <div className="form-control ">
            <label className="label">
                <span className="label-text">Recipe Name*</span>
            </label>
            <input type="text" {...register("name", { required: true, maxLength: 50 })} placeholder="Recipe Name" className=" input input-bordered w-full  " />
            </div>

            <div className="flex gap-6 my-5">
            <div className="form-control w-full  ">
            <label className="label">
                <span className="label-text">Category*</span>
            </label>
           
            <select defaultValue="Pick One"  {...register("category", { required: true})} className="select select-bordered">
                <option disabled>Pick One</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Pizza</option>
                <option>Salad</option>
                <option>Drinks</option>
            </select>
            </div>

            <div className="form-control w-full ">
            <label className="label">
                <span className="label-text">Price*</span>
            </label>
            <input type="number" {...register("price", { required: true})} placeholder="Price" className="input input-bordered " />
            </div>
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Recepi Details</span>
            </label>
            <textarea {...register("recipe", { required: true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            </div>
            <div className="form-control w-full my-3 ">
            <label className="label">
                <span className="label-text">Item Image*</span>
            </label>
            <input type="file" {...register("image", { required: true})}  className="file-input file-input-bordered w-full " />
            </div>
            <input className="btn btn-warning mt-4" type="submit" value="Add Item" />
            </form>
        

        </div>
    );
};

export default AddItem;