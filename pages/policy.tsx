import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Footer, Header, Heading, Nav } from '../components'
import { Genres } from '../utilities/typing'

interface Props {
  genres: [Genres]
}

const Policy = ({ genres }: Props) => {
  return (
    <div>
      <Head>
        <title>
          MoviJet || Get the latest information about your favourite movies and
          TV shows. || Download and watch the latest Movies and TV shows.
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Movijet where you can get the latest information about your favourite movies and
          TV shows. Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta
          name="keywords"
          content="movies to watch on netflix, movies to watch on prime, Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast"
        />
      </Head>

      <Header />

      {/* Navbar */}
      <Nav genres={genres} />

      <div className="mx-auto my-10 max-w-7xl">
        <Heading title="Privacy policy" />

        <p className="my-2 text-lg">
          At movijet.vercel.app, accessible from https://movijet.vercel.app/,
          one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by movijet.vercel.app and how we use it. <br />
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us. <br />
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in movijet.vercel.app. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </p>
        <h1 className="my-5 text-xl">Consent:</h1>
        <p className="my-2 text-lg">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <h1 className="my-5 text-xl">Information we collect:</h1>
        <p className="my-2 text-lg">
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. <br />
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide. <br />
          When you register for an Account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </p>

        <h1 className="my-5 text-xl">How we use your information:</h1>
        <p className="my-2 text-lg">
          We use the information we collect in various ways, including to:
        </p>
        <ul className="ml-10 text-lg">
          <li>1. Provide, operate, and maintain our website</li>
          <li>2. Improve, personalize, and expand our website</li>
          <li>3. Understand and analyze how you use our website</li>
          <li>
            4. Develop new products, services, features, and functionality
          </li>
          <li>
            5. Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </li>
          <li>6. Send you emails</li>
          <li>7. Find and prevent fraud</li>
        </ul>

        <h1 className="my-5 text-xl">Log Files:</h1>
        <p className="my-2 text-lg">
          movijet.vercel.app follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services' analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users' movement on the website, and
          gathering demographic information.
        </p>

        <h1 className="my-5 text-xl">Google DoubleClick DART Cookie:</h1>
        <p className="my-2 text-lg">
          Google is one of a third-party vendor on our site. It also uses
          cookies, known as DART cookies, to serve ads to our site visitors
          based upon their visit to www.website.com and other sites on the
          internet. However, visitors may choose to decline the use of DART
          cookies by visiting the Google ad and content network Privacy Policy
          at the following URL –{' '}
          <a href="https://policies.google.com/technologies/ads">
            https://policies.google.com/technologies/ads
          </a>
        </p>

        <h1 className="my-5 text-xl">Advertising Partners Privacy Policies:</h1>
        <p className="my-2 text-lg">
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of movijet.vercel.app. <br /> Third-party ad
          servers or ad networks uses technologies like cookies, JavaScript, or
          Web Beacons that are used in their respective advertisements and links
          that appear on movijet.vercel.app, which are sent directly to users'
          browser. They automatically receive your IP address when this occurs.
          These technologies are used to measure the effectiveness of their
          advertising campaigns and/or to personalize the advertising content
          that you see on websites that you visit. <br /> Note that
          movijet.vercel.app has no access to or control over these cookies that
          are used by third-party advertisers.
        </p>

        <h1 className="my-5 text-xl">Third Party Privacy Policies:</h1>
        <p className="my-2 text-lg">
          movijet.vercel.app's Privacy Policy does not apply to other
          advertisers or websites. Thus, we are advising you to consult the
          respective Privacy Policies of these third-party ad servers for more
          detailed information. It may include their practices and instructions
          about how to opt-out of certain options. <br /> You can choose to
          disable cookies through your individual browser options. To know more
          detailed information about cookie management with specific web
          browsers, it can be found at the browsers' respective websites.
        </p>

        <h1 className="my-5 text-xl">
          CCPA Privacy Rights (Do Not Sell My Personal Information):
        </h1>
        <p className="my-2 text-lg">
          Under the CCPA, among other rights, California consumers have the
          right to: <br />
          Request that a business that collects a consumer's personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers. <br />
          Request that a business delete any personal data about the consumer
          that a business has collected. <br />
          Request that a business that sells a consumer's personal data, not
          sell the consumer's personal data. <br />
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </p>

        <h1 className="my-5 text-xl">GDPR Data Protection Rights:</h1>
        <p className="my-2 text-lg">
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following: <br />
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service. <br />
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete. <br />
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions. <br />
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
          <br />
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
          <br />
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
          <br />
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </p>

        <h1 className="my-5 text-xl">Children's Information:</h1>
        <p className="my-2 text-lg">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity. <br />
          movijet.vercel.app does not knowingly collect any Personal
          Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our
          records.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default Policy

export const getStaticProps: GetStaticProps = async () => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  return {
    props: {
      genres: genreData.genres,
    },
    revalidate: 60,
  }
}
