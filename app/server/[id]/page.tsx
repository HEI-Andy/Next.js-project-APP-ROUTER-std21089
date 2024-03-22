import PokemonDetails from "@/components/details"

export default function Details({ params }: { params: { id: string} }) {
    return (
        <>
            <h1>Pokemon Details</h1>
            <PokemonDetails id={params.id} />
        </>
    );
}
