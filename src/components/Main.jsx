import { useState, useEffect } from "react";

function Main(props) {
    const apikey = import.meta.env.VITE_API_KEY
    const [photo, setPhoto] = useState({
        photo: '',
        name: '',
        date: '',
        description: '',
        copyright: '',
        mediaType: ''
    })

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`)
            .then(res => res.json())
            .then(data => setPhoto(() => {
                return {
                    photo: data.url,
                    name: data.title,
                    date: data.date,
                    description: data.explanation,
                    copyright: data.copyright,
                    mediaType: data.media_type
                }
            }))
    }, [])

    return (
        <main className={props.darkMode ? "dark" : ""}>
            <div className="photo--card">
                <h1>NASA's Astronomy Photo of the Day</h1>
                <h3>Date: {photo.date}</h3>
                <img className="apod--image" src={photo.photo} alt={photo.name} />
                <h3>Title: {photo.name}</h3>
                <small>Photo Credit: {photo.copyright}</small>
                <p className="apod--desc">Description: {photo.description}</p>
            </div>
        </main>
    )
}

export default Main