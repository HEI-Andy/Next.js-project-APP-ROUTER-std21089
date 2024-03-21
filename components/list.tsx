'use client'

import React, { useEffect, useState } from 'react';
import data from '../utils/api/api';
import { Data } from '@/utils/types/types';
import Pokemon from './home';

function List() {
    const [poke, setPoke] = useState<Data[]>([]);

    useEffect(() => {
        function updateData() {
            data.getAllPokemons(50).then((res) => {
                setPoke(res);
            });
        }
        updateData();
    }, []);

  return (
    <>
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white-900">Pokemons list</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {poke.map((poke) => (
                        <div key={poke.url} className="group relative">
                            <Pokemon pokemon={poke} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default List;