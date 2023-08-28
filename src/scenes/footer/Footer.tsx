import Logo from '@/assets/Logo.png';


const Footer = () => {
    return (
        <footer className='bg-primary-100 py-16'>
            <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
                <div className='mt-16 basic-1/2 md:mt-0'>
                    <img alt="logo" src={Logo} />
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facilis tenetur ullam, accusamus aliquam ipsam odio tempora illo, delectus cupiditate ut doloribus aut aspernatur voluptatum, beatae numquam laudantium cumque fugit!
                    </p>
                    <p>😇 Evogym All Rights Reserved</p>
                </div>
                <div className='mt-16 basic-1/4 md:mt-0'>
                    <h4 className='font-bold'>Links</h4>
                    <p className='my-5'>Lorem, ipsum dolor.</p>
                    <p className='my-5'>Lorem ipsum dolor sit.</p>
                </div>
                <div className='mt-16 basic-1/4 md:mt-0'>
                    <h4 className='font-bold'>Contact Us</h4>
                    <p className='my-5'>Lorem ipsum dolor sit amet.</p>
                    <p>9898656532</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer