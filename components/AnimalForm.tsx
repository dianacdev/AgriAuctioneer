import React from 'react'

const AnimalForm = () => {
  return (
    <div className='flex justify-center bg-slate-900 w-full h-full rounded-xl p-8'>
        <form action="" className=''>
        <h1 className='font-semibold text-2xl text-slate-100 '>Animal Form</h1>
        <br/>
            <div className='w-full grid grid-cols-2 mb-4 bg-slate-800 rounded-md p-4'>
                <div className='grid'>
                    <label htmlFor="species">
                        Species:
                    </label>
                    <select name="species" id="" className='bg-slate-500 rounded-md m-2' required>
                        <option>Goat</option>
                        <option>Swine</option>
                        <option>Sheep</option>
                        <option>Equine</option>
                        <option>Cow</option>
                    </select>
                </div>
                <div className='grid'>
                    <label htmlFor="Animal tag">
                        Animals Tag:
                    </label>
                    <input type="text" name='tag' className='bg-slate-500 rounded-md m-2'></input>
                </div>
                <div className='grid'>
                    <label htmlFor="subspecies">
                        Sub-Species:
                    </label>
                    <select name="species" id="" className='bg-slate-500 rounded-md m-2'>
                        <option>Whether</option>
                        <option>Does</option>
                        <option>Buck</option>
                        <option>Nanny</option>
                    </select>
                </div>

            </div>
            <div className='grid grid-cols-2 bg-slate-800 rounded-md p-4'>
                <div className='grid'>
                    <label htmlFor="lot number">
                        Lot Number:
                    </label>
                    <input className='rounded-md bg-slate-500 m-2 text-center' type="text" name='Lot Number' required></input>
                </div>
                <div className='grid'>
                    <label htmlFor="dob">
                        Date of Birth:
                    </label>
                    <input className='rounded-md bg-slate-500 m-2 text-center' type="date" name='Lot Number'></input>
                </div>
            </div>
            <div className='grid grid-cols-2 my-4 bg-slate-800 rounded-md p-4'>
                <div className='grid'>
                    <label htmlFor="mother's tag">
                        Mothers Tag:
                    </label>
                    <input className='rounded-md bg-slate-500 m-2 text-center' type="text" name='Mother Tag Number'></input>
                </div>
                <div className='grid'>
                    <label htmlFor="father's tag">
                        Fathers Tag:
                    </label>
                    <input className='rounded-md bg-slate-500 m-2 text-center' type="text" name='Father Tag Number'></input>
                </div>
            </div>
            <div className='grid bg-slate-800 rounded-md p-4'>
                    <label htmlFor="Additional Info">Additional Info</label>
                    <textarea className='rounded-md bg-slate-500 w-full p-2 mt-2'>
                    </textarea>
                </div>
            <br/>
            <div className='grid w-full mb-4 bg-slate-800 rounded-md p-4'>
                <label htmlFor="file">
                    Upload Files:
                </label>
                <input className='mt-2' type="file" name='file upload' multiple />
            </div>
            <button className='bg-blue-500 hover:bg-agri-blue-100 rounded-full p-2 m-2 w-full'>Submit</button>
        </form>
    </div>
  )
}

export default AnimalForm