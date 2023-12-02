import {Text, View} from 'react-native';

export function ScreenHome(){
    return(
        <View className="bg-fuchsia-300 p-4 rounded-2xl w-full px-3 py-4 space-y-2 border-black">
            <Text className='text-2xl font-semibold'>
                Grupo
            </Text>
            <View className='flex-row items-center space-x-3'>
                <Text className="text-white bg-zinc-800 py-1 px-2 rounded-md">
                    categoria
                </Text>
                <Text className="text-zinc-600">
                    • 01-12-2023
                </Text>
            </View>
        </View>
    )
}