import React from 'react';
import Typical from 'react-typical';

const Articles = () => {
    return (
        <section className='container mx-auto mt-20 px-5'>
            <h1 className='text-4xl font-bold text-center my-12'>My  <span className='text-primary'>Articles</span></h1>
            <div className='flex gap-1 mx-auto' >
                <h3 className='text-xl text-center font-semibold' >Articles Are</h3>
                <Typical
                    className="text-success text-xl font-semibold"
                    loop={Infinity}
                    steps={[
                        "Coming Soon.",
                        2000,
                    ]}
                />
            </div>
        </section>
    );
};

export default Articles;