import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ImageIcon from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

const CreatePost = () => {
    const [postText, setPostText] = useState('');

    const handlePostChange = (e) => {
        setPostText(e.target.value);
    };

    const handlePostSubmit = () => {
        console.log("Posted:", postText);
        setPostText('');
    };

    return (
        <Card className="mb-4">
            <CardContent>
                <div className="flex items-center mb-2">
                    <img src="https://via.placeholder.com/40" alt="User" className="rounded-full" />
                    <Button className="ml-2" variant="outlined" fullWidth>
                        Start a post, try writing with AI
                    </Button>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <IconButton>
                        <ImageIcon />
                        <span className="ml-2">Media</span>
                    </IconButton>
                    <IconButton>
                        <EventIcon />
                        <span className="ml-2">Event</span>
                    </IconButton>
                    <IconButton>
                        <ArticleIcon />
                        <span className="ml-2">Write article</span>
                    </IconButton>
                </div>
                <textarea
                    value={postText}
                    onChange={handlePostChange}
                    placeholder="What do you want to talk about?"
                    rows="4"
                    className="w-full mt-4 p-2 border rounded"
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    className="mt-2"
                    onClick={handlePostSubmit}
                    disabled={!postText.trim()}
                >
                    Post
                </Button>
            </CardContent>
        </Card>
    );
};

export default CreatePost;
