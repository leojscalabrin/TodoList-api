import mongoose from 'mongoose';

const dataBaseAccess = 'mongodb+srv://leojscalabrin:<xAeuNvXtJ2TrmKIJ>@todoclusterdev.dd7fu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const configureDatabase =  async () => {
    await mongoose.connect(dataBaseAccess)

    const TaskSchema = new mongoose.Schema({
        name: { type: String, default: 'Nome da task'},
        done: { type: Boolean, default: false }
    })

    const Task = mongoose.model('Task', TaskSchema)

    return { Task }
}

export default configureDatabase