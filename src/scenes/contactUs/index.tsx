import { SelectedPage } from '@/sharded/types'
import CountactUsPageGraphics from "@/assets/ContactUsPageGraphic.png"
import { motion } from 'framer-motion'
import HText from '@/sharded/HText'
import { useForm } from 'react-hook-form'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onsubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* HEADING */}
                <motion.div
                    className='md:w-3/3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className='py-5'>
                        Congue adipiscing risus commodo placerat. Tellus et
                        in feugiat nisi sapien vel rhoncus. Placerat at in enim
                        pellentesque. Nulla adipiscing leo egestas nisi elit risus
                        sit. Nunc cursus sagittis.
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div
                        className='mt-10 basic-3/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <form
                            target='_blank'
                            onSubmit={onsubmit}
                            action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                            method='POST'
                        >
                            <input
                                className={inputStyles}
                                placeholder='NAME'
                                type='text'
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name &&
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === 'required' && "This field is required.."}
                                    {errors.name.type === 'maxLength' && "Max length is 100 char"}
                                </p>
                            }
                            <input
                                className={inputStyles}
                                placeholder='EMAIL'
                                type='text'
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i
                                })}
                            />
                            {errors.email &&
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === 'required' && "This field is required.."}
                                    {errors.email.type === 'pattern' && "Invalid email address"}
                                </p>
                            }
                            <textarea
                                className={inputStyles}
                                placeholder='MESSAGE'
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000
                                })}
                            />
                            {errors.message &&
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === 'required' && "This field is required.."}
                                    {errors.message.type === 'maxLength' && "Max length is 2000 char"}
                                </p>
                            }
                            <button
                                className='mt-5 bg-secondary-500 rounded-lg px-20 py-3 transition duration-500 hover:text-white'
                                type='submit'
                            >
                                Submit</button>
                        </form>
                    </motion.div>
                    <motion.div
                        className='relative mt-16 basic-2/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className='w-full before:absolute md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                            <img className='w-full' src={CountactUsPageGraphics} />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs