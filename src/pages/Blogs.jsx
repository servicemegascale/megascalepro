import React, { useEffect } from "react";
import { FiUser, FiCalendar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Blogs = () => {



  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

    const blogs = [
        {
            id: 1,
            title: "Digital Marketing",
            author: "MegaScale",
            image:
                "https://mockframe.com/images/blog/wireframe-application.png?v=1666261606584267669",
            date: "September 2, 2024",
            description:
                "In simple terms, digital marketing is the promotion of products or brands via one or more forms of electronic media. Digital marketing is often referred to as online marketing, internet marketing or web marketing.",
            content: `
        <p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means that you need to meet them where they are already spending time: on the internet.</p>
        <p>Digital marketing has been around for quite some time but it hasn’t been very well defined. We tend to think that digital marketing encompasses banner advertising, search engine optimization (SEO) and pay per click. Yet, this is too narrow a definition, because digital marketing also includes e-mail, RSS, voice broadcast, fax broadcast, blogging, podcasting, video streams, wireless text messaging, and instant messaging. Yes! digital marketing has a very wide scope.</p>
        <p>Digital marketers monitor things like what is being viewed, how often and for how long, sales conversions, what content works and doesn’t work, etc. While the Internet is, perhaps, the channel most closely associated with digital marketing, others include wireless text messaging, mobile instant messaging, mobile apps, podcasts, electronic billboards, digital television and radio channels, etc.</p>
        <ul>
          <li>Why Digital Marketing?</li>
          <li>In digital marketing, a reporting and analytics engine can be layered within a campaign which allows the organization or brand to monitor in real-time how a campaign is performing, such as what is being viewed, how often, how long, as well as other actions such as response rates and purchases made.</li>
          <li>The use of digital marketing in the digital era not only allows for brands to market their products and services but also offers online customer support through 24x7 services to make the customer feel supported and valued.</li>
          <li>The use of social media in digital marketing interaction allows brands to receive both positive and negative feedback from their customers as well as determine what media platforms work well for them.</li>
          <li>Digital marketing provides increased advantage for brands and businesses. It is now common for consumers to post feedback online through social media sources, blogs, and websites about their experience with a product or brand.</li>
        </ul>
        <p>In this post, we’ll explore each step with real examples and expert recommendations for businesses aiming to launch high-performing web applications in 2024.</p>
      `,
        },
        {
            id: 2,
            title: "Big Data Analysis",
            author: "MegaScale",
            image:
                "https://maybe.works/media/blogs/types-of-web-applications-choosing-the-right/1100x600.jpg",
            date: "September 27, 2023",
            description:
                "Big data analytics is the process of examining large and varied data sets -- i.e., big data -- to uncover hidden patterns, unknown correlations, market trends, customer preferences and other useful information that can help organizations make more-informed business decisions.",
            content: `
        <p>Big data analytics benefits</p>
        <ul>
        <li>Driven by specialized analytics systems and software, big data analytics can point the way to various business benefits, including new revenue opportunities, more effective marketing, better customer service, improved operational efficiency and competitive advantages over rivals.</li>
        <li>Big data analytics applications enable data scientists, predictive modelers, statisticians and other analytics professionals to analyze growing volumes of structured transaction data, plus other forms of data that are often left untapped by conventional business intelligence (BI) and analytics programs. That encompasses a mix of semi-structured and unstructured data -- for example, internet clickstream data, web server logs, social media content, text from customer emails and survey responses, mobile-phone call-detail records and machine data captured by sensors connected to the internet of things. </li>
        <li>On a broad scale, data analytics technologies and techniques provide a means of analyzing data sets and drawing conclusions about them to help organizations make informed business decisions. BI queries answer basic questions about business operations and performance. Big data analytics is a form of advanced analytics, which involves complex applications with elements such as predictive models, statistical algorithms and what-if analyses powered by high-performance analytics systems.</li>
        </ul> 
        `,
    },
    {
        id: 3,
        title: "Cloud Computing",
        author: "MegaScale",
        image:
        "https://visions4technology.co.uk/wp-content/uploads/2020/01/Web-Application-Development1.jpg",
        date: "May 22, 2023",
        description:
        "Simply put, cloud computing is the delivery of computing services—servers, storage, databases, networking, software, analytics and more—over the Internet (“the cloud”). Companies offering these computing services are called cloud providers and typically charge for cloud computing services based on usage, similar to how you are billed for water or electricity at home.",
        content: `
        <p>Uses of cloud computing</p>
        <p>You are probably using cloud computing right now, even if you don’t realise it. If you use an online service to send email, edit documents, watch movies or TV, listen to music, play games or store pictures and other files, it is likely that cloud computing is making it all possible behind the scenes. The first cloud computing services are barely a decade old, but already a variety of organisations—from tiny startups to global corporations, government agencies to non-profits—are embracing the technology for all sorts of reasons. Here are a few of the things you can do with the cloud:</p>
        <ul>
        <li>Create new apps and services</li>
        <li>Store, back up and recover data </li>
        <li>Host websites and blogs</li>
        <li>Stream audio and video</li>
        <li>Deliver software on demand</li>
        <li>Analyse data for patterns and make predictions</li>
        </ul> 
      `,
        },
    ];

    return (
        <section className=" py-12 px-8 ">
            <div className="container mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#0A1721]">
                    Read Our Recent Blogs
                </h2>

                {/* Blogs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.id}
                            to={`/blog/${blog.id}`}
                            state={{ blog }}
                            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Blog Image */}
                            <div className="overflow-hidden h-56">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Blog Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between text-gray-700 mb-2 text-sm">
                                    <div className="flex items-center">
                                    <FiCalendar className="mr-2 text-[#0A1721] w-4" />
                                    <span className="text-[#0A1721] font-medium text-sm">{blog.date}</span>
                                    </div>
                                    <div className="flex items-center">
                                    <FiUser className="mx-2 text-[#f15124] w-4" />
                                    <span className="text-[#f15124] font-medium text-sm">{blog.author}</span>
                                    </div>
                                </div>

                                <h3 className="text-start text-xl font-bold mb-3 text-[#0A1721] line-clamp-2">
                                    {blog.title}
                                </h3>

                                {/* Truncated Description */}
                                <p className="text-start text-gray-700 mb-4  md:text-md line-clamp-3">
                                    {blog.description}
                                </p>

                                <span className="w-35 flex  items-center text-[#0A1721] font-medium border-b-2 border-transparent group-hover:border-b-blue-900 transition-all">
                                    See Full Article
                                    <FiArrowRight className="ml-2 text-[#0A1721] " />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
