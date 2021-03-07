import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import Date from '../components/Date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPosts } from '../repositories/PostRepository'

export default function Home({ posts }) {

  const git_hub = 'https://github.com/Vandrs';
  const linkedin = 'https://br.linkedin.com/in/vandersonnunes';

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <h2>Next Lesson <a href="https://nextjs.org/learn/basics/api-routes">API Routes</a></h2>
        <p>Hi guys i'm a Full Stack developer with 9+ years of professional and i'm learning React and NextJS. Check out my <a href={linkedin}>LinkedIn</a> and <a href={git_hub}>Github</a> pages. Thanks!!!</p>
        <p>
          (Credits to{' '}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog (Markdown Data fetched using gray-matter lib)</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getSortedPosts();
  return {
    props: {
      posts
    }
  }
}