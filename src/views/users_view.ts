import User from '../app/models/User';

export default {
    render(user: User) {
        return { 
            id: user.id,
            name: user.name,
            created_at: user.createdAt
        }
    }
}