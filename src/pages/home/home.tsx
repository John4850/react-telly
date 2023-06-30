import React, { useEffect } from "react"
import { PageWrapper } from "./home.styles"
import { Header, GifViewer, Button } from "../../components"
import { useGif } from "../../data/hooks/useGif"

export const DEFAULT_KEYWORD = "dance"

export const HomePage = () => {
	const {
		data: gif,
		refetch: fetchNewGif,
		isLoading,
		isFetching,
		isError,
	} = useGif(DEFAULT_KEYWORD)

	const handleClick = ()=> {
		fetchNewGif()
	};

	useEffect(()=>{

	},[gif, fetchNewGif])

	let buttonText = "Start"

	return (
		<PageWrapper>
			<Header>React Telly</Header>
			<GifViewer gifUrl={gif?.data.images.downsized_medium.url} isError={isError} isLoading={isLoading} />
			<Button onClick={handleClick} >{buttonText}</Button>
		</PageWrapper>
	)
}
