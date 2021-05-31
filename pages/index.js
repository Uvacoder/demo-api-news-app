
import {Box, Heading} from "@chakra-ui/layout"
import { Articles } from '../components/articles'

export default function Home({news}) {
  const {data} = news

  return (
    <Box maxw="960px" p={4}>
      <Heading my={8} textAlign="center">Latest News Stories</Heading>
      <Box width="100%" mx="auto" my={4}>
      {data && data.map((article) => {
        return(
          <Articles data={article}/>
        )
      })}
      </Box>
    </Box>
  )
}

export async function getStaticProps(){
  const API_KEY = process.env.NEWS_API_KEY;
  const res = await fetch(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=us&languages=en&sort=published_desc`);
  const news = await res.json();
  return{
    props:{
      news
    },
    revalidate:1800
  }
  
};