import {Box} from "@chakra-ui/layout"
import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
const Articles = (props) => {
    const {author,published_at,title,url} = props.data;
    const published_date = new Date(published_at);
    return(
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Box width='50%'  mx="auto"borderWidth="1px" borderRadius="lg" my={4}>
      <Box p="6">
        <Heading as="h6" size="md" textAlign="center"
        >
          {title}
        </Heading>
        <Text>
          by {author || "Unknown Author"}
        </Text>
        <Box>
          <Text as="span"color="gray.600" fontSize="sm">
            {published_date.toLocaleString("en-US")}
          </Text>
        </Box>
      </Box>
    </Box>
    </a>
    )
}

export  {Articles};