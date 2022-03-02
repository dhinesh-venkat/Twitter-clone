import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import auth from '../authentication/auth'
import SearchItem from '../components/user card/SearchItem'
import { searchUser } from '../services/followerService'
import ReactTooltip from 'react-tooltip';


const Search = () => {

    const [users, setusers] = useState([])
    const navigate = useNavigate()
    const { state } = useLocation();

    const load = () => searchUser(state).then((res) => {
        if (res.status === 200) {
            setusers(res.data)
        }
    }).catch((err) => {
        if (err.response.status === 401) {
            auth.logout(() => {
                navigate('/login')
            })
        }
    })

    useEffect(() => {
        load()
        // eslint-disable-next-line
    }, [state])

    const usersList = users.map((user) =>
        <li>
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`profile/${user.name}`}
                key={user.id}
                state={user}
            >
                <a href="/nothing" data-tip="Click to view profile">
                    <ReactTooltip place="right" type="info" effect="solid" />
                    <SearchItem json={user} buttonText='Unfollow' isProfile={true} />
                </a>
            </Link>

        </li>


    )

    return (
        <div>
            <div className="bg-black-dark min-h-screen flex-1">
                <div className="mt-12 flex justify-center  m-auto">
                    <ul>{usersList}</ul>
                </div>
            </div>
        </div>
    )
}

export default Search
