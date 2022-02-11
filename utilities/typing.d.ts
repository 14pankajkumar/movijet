export interface Genres {
    id: number
    name: string
}

export interface Results {
    adult: boolean
    backdrop_path: string
    genre_ids: []
    id: number
    media_type: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface Media {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: {
        backdrop_path: string
        id: number
        name: string
        poster_path: string
    }
    budget: number
    genres: [Genres]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: {
        id: number
        logo_path: string
        name: string
        origin_country: string
    }
    production_countries: {
        iso_3166_1: string
        name: string
    }
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: [{
        english_name: string
        iso_639_1: string
        name: string
    }]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface Casts {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string
    credit_id: string
    order: number
}

export interface MediaUrl {
    id: string
    mediaId: string
    title: string
    mediaUrl: string
    description: {
        raw: {
            children: [{
                type: string
                children: [{
                    text: string
                }]
            }]
        }
    }
    storyLine: {
        raw: {
            children: [{
                type: string
                children: [{
                    text: string
                }]
            }]
        }
    }
    video: {
        url: string
    }
}

export interface SocialId {
    id: number
    facebook_id: string
    imdb_id: string
    instagram_id: string
    twitter_id: string
}

export interface Keyword {
    id: number
    keywords: [{
        id: number
        name: string
    }]
}

export interface Reviews {
    author: string
    author_details: {
        avatar_path: string
        name: string
        rating: number
        username: string
    }
    content: string
    created_at: string
    id: string
    updated_at: string
    url: string
}

export interface GetUser {
    id: string
    uid: string
    username: string
    name: string
    email: string
    profileImageUrl: string
    profileImage: {
        url: string
    }
}