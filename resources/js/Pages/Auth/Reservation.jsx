import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Head, useForm } from '@inertiajs/react';
import { FaCalendar } from 'react-icons/fa';

export default function Reservation({ auth }) {
    function CustomInput({ value, onClick }) {
        return (
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <input
                    type="text"
                    className="form-control flex-1 p-2 border-0 focus:outline-none"
                    value={value}
                    onClick={onClick}
                    readOnly
                />
                <div className="bg-gray-200 px-3 py-2">
                    <span className="text-gray-600">
                        <FaCalendar/>
                    </span>
                </div>
            </div>
        )
    }

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
    });



    const submit = (e) => {
        e.preventDefault();

        post(route('reserve.post'));
    };

    return (
        <>
            <Head title="Reserve" />
            <AuthenticatedLayout
                user={auth.user}
            >
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="phone" value="Phone Number" />

                        <TextInput
                            id="phone"
                            type="number"
                            name="phone"
                            value={data.phone}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('phone', e.target.value)}
                            
                        />

                        <InputError message={errors.phone} className="mt-2" />
                    </div>

                    <div className='mt-4'>
                        <InputLabel htmlFor="service" value="Select Service" />

                        <select onChange={(e) => setData('service', e.target.value)} name="service" id="service" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected disabled>Select service</option>
                            <option value="Facial">Facial Treatments</option>
                            <option value="Hair&Style">Haircut and Styling</option>
                            <option value="Manicure">Manicure and Pedicure</option>
                        </select>

                        <InputError message={errors.service} className="mt-2" />
                    </div>

                    <div class="mt-4">
                        <InputLabel htmlFor="date" value="Select Date" />
                        <label><DatePicker id='date' selected={data.date} onChange={date => setData('date', date)} customInput={<CustomInput />} /> </label>
                        <InputError message={errors.date} className="mt-2" />
                    </div>

                    <div className='mt-4'>
                        <InputLabel htmlFor="time" value="Select time" />

                        <select onChange={(e) => setData('time', e.target.value)} name="time" id="time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Select Time</option>
                            <option value="09:00-10:00">09:00-10:00</option>
                            <option value="10:00-11:00">10:00-11:00</option>
                            <option value="11:00-12:00">11:00-12:00</option>
                            <option value="13:00-14:00">13:00-14:00</option>
                            <option value="14:00-15:00">14:00-15:00</option>
                        </select>

                        <InputError message={errors.time} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </AuthenticatedLayout>
        </>
    )
}