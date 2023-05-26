import React, { createRef } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import Pdf from "react-to-pdf";


const Blog = () => {
    const ref = createRef();
    return (
        <div>
            <Pdf targetRef={ref} filename="Blog.pdf">
                {({ toPdf }) => <h2 className=' text-3xl text-green-500 mt-6 flex items-center justify-center'><span>QUESTIONS & ANSWERING PAGE</span><FaCloudDownloadAlt className='cursor-pointer ' onClick={toPdf}></FaCloudDownloadAlt></h2>}
            </Pdf>
            {/* <button onClick={toPdf}>Generate Pdf</button> */}
            {/* <h2 className=' text-3xl text-green-500 mt-6 flex items-center justify-center'><span>QUESTIONS & ANSWERING PAGE</span><FaCloudDownloadAlt></FaCloudDownloadAlt></h2> */}
            <div ref={ref} className='container mb-[130px] mx-auto mt-6'>

                <article>
                    <h3 className='font-semibold text-lg'>1. Tell us the differences between uncontrolled and controlled components.</h3>
                    <blockquote>
                        Controlled Component managed by React state, parent component updates state on user interaction, data flows from parent component to component, easier to debug, generally faster as there's less state management, less complex code. Whereas, Uncontrolled Component managed by component's own internal state,component updates own internal state on user interaction, data flows within the component, more difficult to debug, generally slower as there's more state management, considered an alternate approach.
                    </blockquote>
                </article>

                <article className='my-6'>
                    <h3 className='font-semibold text-lg'>2. How to validate React props using PropTypes?</h3>
                    <blockquote>
                        App.propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. Specifying validation patterns is followed by setting App.defaultProps. For performance reasons, propTypes is only checked in development mode.
                        To install the prop-types library, we run:
                        npm i prop-types

                    </blockquote>
                </article>

                <article >
                    <h3 className='font-semibold text-lg'>3. Tell us the difference between nodejs and express js?</h3>
                    <blockquote>
                        Express is a framework that runs on top of NodeJS and aids in handling requests and responses. NodeJS is the package that provides the JavaScript run-time environment. Express.js have More features than Node.js, built on Node.js, Controllers and Routing are provided, Uses middleware for the arrangement of functions systematically server-side. Where Node.js have Fewer features, built on Google’s V8 engine, Controllers and Routing are not provided, Run-time platform or environment designed for server-side execution of JavaScript.
                    </blockquote>
                </article>

                <article className='mt-6'>
                    <h3 className='font-semibold text-lg'>4. What is a custom hook, and why will you create a custom hook?</h3>
                    <blockquote>
                        Custom React hooks are an essential tool that let you add special, unique functionality to your React applications.
                        Because of customized React JS hooks are dependable, reusable, and code-cleansing, developers can save time by using them. The construction of React JS custom hooks is rather straightforward, and there are several open sources where you can obtain libraries of pre-made custom hooks.
                    </blockquote>
                </article>
            </div>
        </div>
    );
};

export default Blog;