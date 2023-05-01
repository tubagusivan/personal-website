import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/action/actionCreator";
import hr from '../assets/curve-hr.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";

function Portofolio() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <section className="pt-20 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center bg">
                <h1 className="mt-3 text-3xl text-gray-800 font-semibold">
                    Portofolio
                </h1>
                <p className="mt-3 text-gray-500">
                    Below are my list project.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm bg-white" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">Project Date: {items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                                <div className='w-full lg:p-8 p-4 flex items-center justify-between'>
                                    <a href={items.href} className='mt-2 block font-light text-gray-800'>View Project <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight} /> </a>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
            <div id="about" className="flex md:h-20 gap-5 items-center justify-center text-white relative">
                <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
            </div>
        </section>
    )
}

export default Portofolio
