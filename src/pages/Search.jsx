import React from 'react'
import { Link } from 'react-router-dom'
import SearchItem from '../components/user card/SearchItem'
import { getItems } from '../search'

const Search = () => {

    const data = getItems()

    const users = data.map((user, i) =>
        <li>
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`profile/tweets`}
                key={user.userId}
            >
                <SearchItem json={user} buttonText='Unfollow' isProfile={true} />
            </Link>
            
        </li>


    )

    return (
        <div>
            <div className="bg-black-dark min-h-screen flex-1">
                <div className="mt-12 flex justify-center  m-auto">
                    <ul>{ users }</ul>
                </div>
            </div>
        </div>
    )
}

export default Search
