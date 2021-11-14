import React from 'react'
import { VStack, Heading, Spacer, Grid, Stack, Button } from '@chakra-ui/react'
import { Input, Textarea } from '@chakra-ui/react'
import BlogPost from '../Components/Blog/BlogPost'

const Blog = () => {

    //local blog data
    //will plan to use mongoDB + Express Server in the future to store + retrieve data
    const data = [ 
        {
          title: "Yellowstone National Park",
          url: "https://images.unsplash.com/photo-1570470276043-874a41ad9b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93c3RvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat. Turpis cursus in hac habitasse platea dictumst quisque. Lacus viverra vitae congue eu consequat ac. Enim diam vulputate ut pharetra sit amet aliquam id. Fringilla est ullamcorper eget nulla. At augue eget arcu dictum varius. Libero nunc consequat interdum varius. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id donec ultrices tincidunt arcu non sodales neque. Massa eget egestas purus viverra. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.",
        },
        {
          title: "Arches National Park",
          url: "https://images.unsplash.com/photo-1606859309981-270838d57ed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat. Turpis cursus in hac habitasse platea dictumst quisque. Lacus viverra vitae congue eu consequat ac. Enim diam vulputate ut pharetra sit amet aliquam id. Fringilla est ullamcorper eget nulla. At augue eget arcu dictum varius. Libero nunc consequat interdum varius. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id donec ultrices tincidunt arcu non sodales neque. Massa eget egestas purus viverra. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.",
        },
        {
          title: "Mt Rainier National Park",
          url: "https://images.unsplash.com/photo-1594324587519-20940384fd9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0aW9uYWwlMjBwYXJrc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat. Turpis cursus in hac habitasse platea dictumst quisque. Lacus viverra vitae congue eu consequat ac. Enim diam vulputate ut pharetra sit amet aliquam id. Fringilla est ullamcorper eget nulla. At augue eget arcu dictum varius. Libero nunc consequat interdum varius. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id donec ultrices tincidunt arcu non sodales neque. Massa eget egestas purus viverra. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.",
        },
        {
          title: "Grand Canyon National Park",
          url: "https://images.unsplash.com/photo-1542499239-14678056f1ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat. Turpis cursus in hac habitasse platea dictumst quisque. Lacus viverra vitae congue eu consequat ac. Enim diam vulputate ut pharetra sit amet aliquam id. Fringilla est ullamcorper eget nulla. At augue eget arcu dictum varius. Libero nunc consequat interdum varius. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id donec ultrices tincidunt arcu non sodales neque. Massa eget egestas purus viverra. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.",
        },
        {
            title: "Yosemite Valley",
            url: "https://images.unsplash.com/photo-1495485875514-28320fd56a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1282&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat. Turpis cursus in hac habitasse platea dictumst quisque. Lacus viverra vitae congue eu consequat ac. Enim diam vulputate ut pharetra sit amet aliquam id. Fringilla est ullamcorper eget nulla. At augue eget arcu dictum varius. Libero nunc consequat interdum varius. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id donec ultrices tincidunt arcu non sodales neque. Massa eget egestas purus viverra. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.",
        },
        {
            title: "Zion National Park",
            url: "https://images.unsplash.com/photo-1519359208512-8f457d3cb510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat. Turpis cursus in hac habitasse platea dictumst quisque. Lacus viverra vitae congue eu consequat ac. Enim diam vulputate ut pharetra sit amet aliquam id. Fringilla est ullamcorper eget nulla. At augue eget arcu dictum varius. Libero nunc consequat interdum varius. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id donec ultrices tincidunt arcu non sodales neque. Massa eget egestas purus viverra. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.",
        },
    ];

    //store the state of blog posts and input forms
    const [title, setTitle] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [blogPosts, setBlogPosts] = React.useState(data);

    //handle changes in the input forms
    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleUrlChange = (event) => setUrl(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    //handle the submission of a new blog post
    const handleSubmit = () => {

        if (title === '' || url === '' || description === '') { //check for invalid input
            alert("Please fill in all the fields!!");
            return;
        }

        setBlogPosts([{ title: title, url: url, description: description }, ...blogPosts]);
        setTitle("");
        setUrl("");
        setDescription("");

    };

    return (
        <VStack p={4} spacing='50px' >
            <Spacer />
            <Heading mb= '8' fontWeight='extrabold' size='2xl' > National Park Blog Page </Heading>

            <Stack spacing='4' w='60%' >
                <Input 
                    variant="outline" 
                    placeholder="title" 
                    borderWidth='3px' 
                    value={title} 
                    onChange={handleTitleChange} />
                <Input 
                    variant="outline" 
                    placeholder="image url" 
                    borderWidth='3px' 
                    value={url} 
                    onChange={handleUrlChange}/>
                <Textarea 
                    variant="outline" 
                    placeholder="description" 
                    borderWidth='3px' 
                    value={description} 
                    onChange={handleDescriptionChange}/>
            </Stack>

            <Button bg='#286C56' color='white' size="lg" w='20%' onClick={handleSubmit} >
                 Submit
             </Button>

            <Grid templateColumns="repeat(3, 1fr)" gap={6} w='80%' alignSelf='center'>    
                {blogPosts.map(post => (
                    <BlogPost title={post.title} url={post.url} description={post.description} />
                ))}
            </Grid>
            <Spacer />
            
        </VStack>
    )
}

export default Blog
