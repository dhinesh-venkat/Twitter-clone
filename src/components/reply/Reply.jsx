import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import Moment from 'react-moment';

const Reply = ({ json }) => {

    const [reply, setreply] = useState(
        {
            "id": json.id,
            "tweetId": json.tweetId,
            "content": json.content,
            "replyBy": json.replyBy,
            "createdAt": json.createdAt
        }
    )

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
                    </div>

                    <div className="text-white">
                        {reply.content}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Reply
