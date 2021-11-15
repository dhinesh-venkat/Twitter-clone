import { Avatar } from '@mui/material'
import React from 'react'
import Moment from 'react-moment';

const Tweet = ({ json }) => {



    return (
        <div className="flex border border-opacity-50 w-1/3 h-auto mb-2">

            <div className="p-5 flex flex-row justify-evenly">
                <div className="rounded-full h-12 mr-4">
                    <Avatar alt="ava" src={ json.owner.avatar } sx={{ width: 30, height: 30 }}/>
                </div>

                <div className="flex-col">
                    <div className="flex flex-row space-x-2">
                        <div className="text-white font-bold">
                            { json.owner.displayName }
                        </div>
                        <div className="text-gray-400">
                            { json.owner.username }
                        </div>
                        <div className="text-gray-400">
                            <Moment format="MMM DD">{ json.createdAt }</Moment>
                        </div>
                    </div>

                    <div className="text-white">
                        { json.content }
                    </div>

                    <div className="flex row space-x-12 mt-2">
                        <div className="flex flex-row">
                            <button className="text-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <div className="text-red-700">
                                { json.likes }
                            </div>
                        </div>
                        <div className="text-gray-400">
                            Reply
                        </div>
                        <div className="text-gray-400">
                            Save
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Tweet
