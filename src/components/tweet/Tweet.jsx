import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import Moment from 'react-moment';
import { useNavigate } from 'react-router';
import PopupMenu from '../popup/PopupMenu';
import { deleteTweet } from '../../services/deleteTweet'
import { updateTweet } from '../../services/updateTweet'
import { getUserId } from '../../authentication/getUserId'
import { likeTweet } from '../../services/likeTweet'


const Tweet = ({ json, hideActions, deleteItem, updateItem }) => {

    const [edit, setedit] = useState(false)
    const [hide, sethide] = useState(false)
    const [content, setcontent] = useState(json.content)
    const [isPublic, setisPublic] = useState(json.isPublic)

    let userId = getUserId()
    let myLike = json.likedBy.includes(userId)
    const [liked, setliked] = useState(myLike)

    let navigate = useNavigate();
    const handleDelete = () => {

        deleteTweet(json.tweetId).then((res) => {
            if (res.status === 200) {
                deleteItem(json.tweetId)
            }
        }).catch((err) => {
            console.log(err.response.status);
        })

    }

    const toggleEdit = () => {
        sethide(true)
        setedit(true)
    }

    const handleUpdate = () => {
        setedit(false)
        sethide(false)
        updateTweet(json.tweetId, content, isPublic).then((res) => {
            console.log(json.tweetId, content, isPublic);
            if (res.status === 200) {
                updateItem(json.tweetId, content, isPublic)
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    const handleLike = () => {
        console.log('liking...');
        likeTweet(json.tweetId).then((res) => {
            if (res.status === 200) {
                setliked(true)
                json.likes += 1
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    const WithoutLike = () => {
        return (<div onClick={handleLike} className="flex flex-row">
            <button
                className="text-gray-400" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
            <div className="text-gray-400">
                {json.likes}
            </div>
        </div>)
    }

    const WithLike = () => {
        return (<div className="flex flex-row">
            <button className="text-red-600" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
            </button>
            <div className="text-red-600">
                {json.likes}
            </div>
        </div >)
    }

    const LikeButton = () => {
        return liked ? <WithLike /> : <WithoutLike />
    }


    return (
        <div className="flex border border-opacity-50 w-1/3 h-auto mb-2">

            <div className="p-5 flex flex-row justify-evenly">
                <div className="rounded-full h-12 mr-4">
                    <Avatar alt="ava" src={json.owner.avatar} sx={{ width: 30, height: 30 }} />
                </div>

                <div className="flex-col">
                    <div className="flex space-x-28">
                        <div className="flex flex-row space-x-2">
                            <div className="text-white font-bold">
                                {json.owner.displayName}
                            </div>
                            <div className="text-gray-400">
                                {json.owner.username}
                            </div>
                            <div className="text-gray-400">
                                <Moment format="MMM DD">{json.createdAt}</Moment>
                            </div>
                        </div>

                        {json.owner.userId === userId ? <PopupMenu onDelete={handleDelete} onEdit={toggleEdit} /> : ''}

                    </div>

                    {!edit ? <div className="text-white">{json.content}</div>
                        : <textarea
                            maxLength='255'
                            value={content}
                            onChange={(e) => setcontent(e.target.value)}
                            className=" rounded-md resize-none overflow-hidden p-2 w-full bg-black-medium h-20 outline-none text-white px-2"></textarea>}

                    {(hideActions || hide) ? '' : <div className="flex row space-x-12 mt-2">
                        <LikeButton />
                        <div className="text-gray-400 hover:text-white transition duration-200">
                            <button onClick={
                                () => {
                                    navigate(`${json.tweetId}`, { state: json })
                                }
                            }>
                                Reply
                            </button>
                        </div>
                        <div className="text-gray-400">
                            Save
                        </div>
                    </div>}
                    {edit ? <div className="flex flex-row justify-end space-x-6 mt-3 items-center">
                        <div className="space-x-2">
                            <input type="checkbox" checked={isPublic} onChange={(e) => setisPublic(e.target.checked)} />
                            <label className="text-gray-400">Public</label>
                        </div><button
                            onClick={handleUpdate}
                            className="text-gray-100 hover:text-white transition duration-200 rounded-full text-sm flex justify-center bg-green-400 hover:bg-green-500 p-2 w-16">Update</button></div>
                        : ''}
                </div>
            </div>



        </div>
    )
}

export default Tweet
