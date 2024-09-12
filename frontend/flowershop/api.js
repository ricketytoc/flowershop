const apiUrl = import.meta.env.VITE_API_URL

export async function getFlowers(id) {
    const url = id ? `${apiUrl}/api/flowers/${id}` : `${apiUrl}/api/flowers`
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch flowers",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

export async function addToFavourites(id) {
    const url = `${apiUrl}/api/favourites`
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            flowerId: id
        })
    })
    if (!res.ok) {
        throw {
            message: "Failed to add to favourites",
            statusText: res.statusText,
            status: res.status
        }
    }
    const favourite = await res.json()
    return favourite
}

export async function getFavourites() {
    const url = `${apiUrl}/api/favourites`
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch favourites",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}