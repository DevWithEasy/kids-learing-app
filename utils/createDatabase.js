import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const createDatabase = async () => {
    try {
        const databaseFile = 'main.db'
        const asset = Asset.fromModule(require('../assets/main.db'));
        await asset.downloadAsync();

        const assetPath = asset.localUri;
        const documentPath = FileSystem.documentDirectory + databaseFile

        // Check if the database file already exists in the document directory
        const dbExists = await FileSystem.getInfoAsync(documentPath);

        if (!dbExists.exists) {
            const create = await FileSystem.copyAsync({
                from: assetPath,
                to: documentPath
            })
        }
        return documentPath;
    } catch (error) {
        console.log(error)
    }
}


export default createDatabase