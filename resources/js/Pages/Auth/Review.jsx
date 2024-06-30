export default function Review({ auth }) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        branch: '',
        rating: '',
        review: ''
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('home'));
    };

    return (
        <>
            <Head title="Review" />
            <AuthenticatedLayout
                user={auth.user}
            >
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="branch" value="Choose a Branch" />

                        <select onChange={(e) => setData('branch', e.target.value)} name="branch" id="branch" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected disabled>Select branch</option>
                            <option value="Ckr">Cikarang Branch</option>
                            <option value="Jkt1">Jakarta Branch 1</option>
                            <option value="Jkt2">Jakarta Branch 2</option>
                            <option value="Tgr">Tangerang Branch</option>
                        </select>

                        <InputError message={errors.branch} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="rating" value="Rating" />

                        <TextInput
                            id="rating"
                            type="number"
                            name="rating"
                            value={data.rating}
                            className="mt-1 block w-full"
                            autoComplete="rating"
                            onChange={(e) => setData('rating', e.target.value)}
                            
                        />

                        <InputError message={errors.rating} className="mt-2" />
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
                        <InputLabel htmlFor="review" value="Inquiry" />

                        <TextInput
                            id="review"
                            name="review"
                            value={data.review}
                            className="mt-1 block w-full"
                            autoComplete="review"
                            isFocused={true}
                            onChange={(e) => setData('review', e.target.value)}
                            
                        />

                        <InputError message={errors.review} className="mt-2" />
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