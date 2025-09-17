export const RoundedDecorText = ({text}: {text: string}) => {
    return(
        <p className="text-white w-fit border font-semibold border-white px-8 py-4 rounded-full overflow-hidden">
            {text}
        </p>
    )
}