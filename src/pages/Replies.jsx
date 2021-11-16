import { Avatar } from '@mui/material';
import { React, useState } from 'react'
import { useLocation } from 'react-router';
import Reply from '../components/reply/Reply'
import Tweet from '../components/tweet/Tweet'
import { getReplies } from '../replies'

const Replies = () => {

    const { state } = useLocation();
    const [replyContent, setreplyContent] = useState("")
    const data = getReplies()

    const replyList = data.map((reply) =>
        <li key={reply.id} className="flex justify-center">
            <Reply json={reply} />
        </li>
    )

    return (
        <div className="bg-black-dark flex-1">
            <div className="flex items-center flex-col mt-14 mb-10">
                <Tweet json={state} hideActions={true} />

                <div className="border border-opacity-50 p-4 flex flex-col w-1/3 space-y-4">
                    <div className="text-gray-400 text-xs">{`Replying to ${state.owner.username}`}</div>

                    <div className="flex flex-row">
                        <div className="rounded-full h-12 mr-4">
                            <Avatar alt="ava" src="https://avatars.dicebear.com/api/avataaars/my.svg" sx={{ width: 30, height: 30 }} />
                        </div>
                        <textarea
                            value={replyContent}
                            onChange={(e) => setreplyContent(e.target.value)}
                            className="rounded-md resize-none overflow-hidden p-2 w-full bg-black-medium h-20 outline-none text-white-primary px-2"></textarea>
                    </div>

                    <button className="bg-pink-600 transition duration-200 hover:bg-pink-700 text-white rounded-full text-xs px-5 py-2 ml-80">Reply</button>

                </div>

                <div className="mt-14 w-1/3">
                    <ul>{replyList}</ul>
                </div>
            </div>
        </div>
    )
}

export default Replies
