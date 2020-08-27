import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Category} from '../models/category.model';
import {Observable} from 'rxjs';
import {Task} from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {
  }

  createTask(task: Task): Promise<any> {
    return this.firestore.collection('tasks').add(task);
  }

  deleteTask(data): Promise<void> {
    return this.firestore
      .collection('task')
      .doc(data.payload.doc.id)
      .delete();
  }

  getTasks(): Observable<any> {
    return this.firestore.collection('tasks')
      .valueChanges();
  }

  getCategories(): Observable<any> {
    return this.firestore.collection('categories')
      .valueChanges();
  }

}
