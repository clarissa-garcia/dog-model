import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Dog,
  GraduationCap,
  ArrowLeft,
} from "lucide-react";

import Header from "../components/layout/Header";

import litterPhoto from "../images/litter_photo.jpg";
import fourKerries from "../images/four_kerries_no_frame.jpg";
import bookCover from "../images/book_cover.PNG";
import skeletonLeft from "../images/skeleton_left.jpg";
import skeletonRight from "../images/skeleton_right.jpg";
import plaque from "../images/plaque.jpg";
import showPhoto from "../images/photo_of_bc_show.jpg";

function AuthorPage() {
  return (
    <div className="author-page">
      <Header showAuthorLink={false}/>

      <main className="author-main">
        <Link className="author-back-link" to="/">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to Anatomy Model
        </Link>

        <section className="author-hero">
          <div className="author-hero__title">
            <p className="author-eyebrow">About the Author</p>

            <h1>
              Catherine “Casey”
              <br />
              Gardiner, RN
            </h1>

            <p className="author-subtitle">
              Author of <em>Dogs: an Atlas of Kinetic Anatomy</em>
            </p>

            <div className="author-title-divider" />

            <p className="author-tagline">
              A passion to learn and to teach.
            </p>
          </div>

          <div className="author-hero__biography">
            <p>
              The Kerry Blue Terrier Club of Canada is proud to 
              recognize the many accomplishments of Casey Gardiner, 
              including her extensive show record with her “Kerrycroft” 
              Kerries and for her unique and pioneering work in canine 
              structure and movement.
            </p>

          </div>

          <figure className="author-hero__image">
            <img
              src={fourKerries}
              alt="Catherine Casey Gardiner with Kerry Blue Terriers"
            />

            <figcaption>
              Educator, mentor, author, and advocate
            </figcaption>
          </figure>
        </section>

        <section
          className="author-highlights"
          aria-label="Author highlights"
        >
          <article className="author-highlight-card">
            <div className="author-highlight-card__icon">
              <Dog size={25} aria-hidden="true" />
            </div>

            <div>
              <h2>Advancing Canine Understanding</h2>

              <p>
                Her anatomical and functional approach 
                helped bring structure and scientific analysis 
                to responsible dog breeding.
              </p>
            </div>
          </article>

          <article className="author-highlight-card">
            <div className="author-highlight-card__icon">
              <GraduationCap size={25} aria-hidden="true" />
            </div>

            <div>
              <h2>Mentor and Educator</h2>

              <p>
                A mentor to many, she invited her students to learn through the course 
                “Purebred Dogs” and through spirited discussions. 
              </p>
            </div>
          </article>

          <article className="author-highlight-card">
            <div className="author-highlight-card__icon">
              <BookOpen size={25} aria-hidden="true" />
            </div>

            <div>
              <h2>Champion for Breeding Science</h2>

              <p>
                 Casey used observation and measurement to contribute to the
                 “Record of Characteristics” and its associated database.
              </p>
            </div>
          </article>
        </section>

        <section className="author-gallery">
          <header className="author-section-heading">
            <p className="author-eyebrow">A Legacy in Images</p>
            <h2>Her work and contributions</h2>
          </header>

          <div className="author-gallery__grid">
            <AuthorGalleryCard
              image={litterPhoto}
              alt="Casey Gardiner with a group of Kerry Blue Terriers"
              caption="Early years with Kerry Blue Terriers"
            />

            <AuthorGalleryCard
              image={skeletonRight}
              alt="Right-facing canine skeletal anatomy artwork"
              caption="Exploring canine structure"
            />

            <AuthorGalleryCard
              image={bookCover}
              alt="Cover of Dogs: an Atlas of Kinetic Anatomy"
              caption="Dogs: an Atlas of Kinetic Anatomy"
              contain
            />

            <AuthorGalleryCard
              image={skeletonLeft}
              alt="Left-facing canine skeletal anatomy artwork"
              caption="Understanding canine movement"
            />

            {/* <AuthorGalleryCard
              image={plaque}
              alt="Plaque honoring contributions to canine structure and movement"
              caption="Recognition of her contributions"
            /> */}

            <AuthorGalleryCard
              image={showPhoto}
              alt="Kerry Blue Terrier show presentation"
              caption="Kerry Blue Terrier accomplishments"
            />
          </div>
        </section>

        <blockquote className="author-quote">
          <span className="author-quote__mark" aria-hidden="true">
            “
          </span>

          <p>
            Study carefully, observe thoughtfully, and teach
            generously.
          </p>

          <footer>— Catherine “Casey” Gardiner, RN</footer>
        </blockquote>
      </main>

      <footer className="author-footer">
        <div>
          <strong>The Kerry Blue Terrier Foundation</strong>
          <p>
            Preserving canine history, education, and research.
          </p>
        </div>

        <p>All content is provided for educational purposes.</p>
      </footer>
    </div>
  );
}

function AuthorGalleryCard({
  image,
  alt,
  caption,
  contain = false,
}) {
  return (
    <figure className="author-gallery-card">
      <div
        className={`author-gallery-card__image ${
          contain
            ? "author-gallery-card__image--contain"
            : ""
        }`}
      >
        <img src={image} alt={alt} />
      </div>

      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default AuthorPage;