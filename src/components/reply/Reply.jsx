import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import Moment from 'react-moment';
import { getUserId } from '../../authentication/getUserId';
import PopupMenu from '../popup/PopupMenu';
import { deleteReply, updateReply } from '../../services/replyService'

const Reply = ({ json, deleteItem }) => {

    const [reply, setreply] = useState(
        {
            "id": json.id,
            "tweetId": json.tweetId,
            "content": json.content,
            "replyBy": json.replyBy,
            "createdAt": json.createdAt
        }
    )

    let userId = getUserId()
    const [edit, setedit] = useState(false)

    const toggleEdit = () => {
        setedit(true)
    }

    const handleDelete = () => {
        deleteReply(reply.id).then((res) => {
            if(res.status === 200) {
                deleteItem(reply.id)
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    const handleUpdate = () => {
        setedit(false)
        updateReply(reply.id, reply.content).then((res) => {
            if(res.status === 200) {
                setreply(...reply, {})
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }


    return (
        <div className="flex border border-opacity-50 w-full h-auto mb-2">

            <div className="p-5 flex flex-row justify-evenly">
                <div className="rounded-full h-12 mr-4">
                    <Avatar alt="ava" src={reply.replyBy.avatar} sx={{ width: 30, height: 30 }} />
                </div>

                <div className="flex-col">
                    <div className="flex flex-row space-x-2">
                        <div className="text-white font-bold">
                            {reply.replyBy.displayName}
                        </div>
                        <div className="text-gray-400">
                            {reply.replyBy.username}
                        </div>
                        <div className="text-gray-400">
                            <Moment format="MMM DD">{reply.createdAt}</Moment>
                        </div>

                        {reply.replyBy.userId === userId ? <PopupMenu onDelete={handleDelete} onEdit={toggleEdit} /> : ''}
                    </div>

                    {!edit ? <div className="text-white">{reply.content}</div>
                        : <textarea
                            maxLength='255'
                            value={reply.content}
                            onChange={(e) => setreply({...reply, content: e.target.value})}
                            className=" rounded-md resize-none overflow-hidden p-2 w-full bg-black-medium h-20 outline-none text-white px-2"></textarea>}

                    {edit ? <button
                            onClick={handleUpdate}
                            className="text-gray-100 hover:text-white transition duration-200 rounded-full text-sm flex justify-center bg-green-400 hover:bg-green-500 p-2 w-16">Update</button>
                        : ''}
                </div>
            </div>



        </div>
    )
}

export default Reply
