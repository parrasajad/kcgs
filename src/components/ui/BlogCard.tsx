interface BlogCardProps {
    image: string;
    date: string;
    author: string;
    title: string;
    link?: string;
}

export default function BlogCard({ image, date, author, title, link = "/blog-details" }: BlogCardProps) {
    return (
        <div className="col-sm-10 col-md-6 col-lg-6 col-xl-4">
            <div className="single-blog">
                <div className="blog single-blog__content">
                    <div className="blog__thumb">
                        <a href={link}>
                            <img src={image} alt="blog thumbnail" />
                        </a>
                    </div>
                    <div className="blog__meta">
                        <div className="blog__meta--da">
                            <div className="blog-date">
                                <span><i className="fal fa-calendar"></i></span>
                                <span>{date}</span>
                            </div>
                            <div className="blog-author">
                                <span><i className="far fa-user"></i></span>
                                <span><a href="#">{author}</a></span>
                            </div>
                        </div>
                        <h5 className="blog__title">
                            <a href={link}>{title}</a>
                        </h5>
                        <a href={link} className="rts-theme-btn primary with-arrow lh-100">
                            Read More <span><i className="fa-thin fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
