import PokemonDetails from "@/components/details";

function Details({ params }: { params: { id: string} }) {
    return (
        <>
            <h1>Pokemon Details</h1>
            <PokemonDetails id={params.id} />
        </>
    );
}

export default Details;