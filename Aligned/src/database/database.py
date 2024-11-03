import sqlite3
from ..api.model import ItemModel
db = sqlite3.connect('Projects.db')
cursor = db.cursor()


def open_or_create_Items_table():
    """Ensures Projects table is always created."""
    db = sqlite3.connect('Projects.db')
    cursor = db.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Projects(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            project_notes TEXT,
            timer TEXT NOT NULL,
            progress INTEGER NOT NULL,
            description TEXT NOT NULL
        )
    ''')
    
    cursor.close(), db.commit(), db.close()

def create(item: ItemModel) -> ItemModel:
    open_or_create_Items_table()
    db = sqlite3.connect('Projects.db')
    cursor = db.cursor()

    cursor.execute( 
            "INSERT OR IGNORE INTO Projects (name, project_notes, timer, progress, description) VALUES (?, ?, ?, ?, ?)", 
        (item.name, item.project_notes, item.timer, item.progress, item.description)
    )
    db.commit()

    cursor.execute("SELECT * FROM Projects WHERE id = ?", (cursor.lastrowid,))

    entity = cursor.fetchone()
    new_item = ItemModel(id=entity[0], name=entity[1], project_notes=entity[2], timer=entity[3], progress=entity[4], description=entity[5])

    cursor.close(), db.close()

    return new_item

def read() -> list[ItemModel]:
    open_or_create_Items_table()
    db = sqlite3.connect('Projects.db')
    cursor = db.cursor()
    items: list[ItemModel] = []
    """Fetch all entries from the database"""
    cursor.execute('''
        SELECT * FROM Projects 
    ''')
    rows = cursor.fetchall()

    for row in rows:
        item = ItemModel(
                    id=row[0], 
                    name=row[1],
                    project_notes=row[2],     
                    timer=row[3],
                    progress=row[4],
                    description=row[5]
                )
        items.append(item)

    cursor.close()
    db.close()
    return items

def find(id:int) -> ItemModel:
    open_or_create_Items_table()
    db = sqlite3.connect('Projects.db')
    cursor = db.cursor()

    cursor.execute("SELECT * FROM Projects WHERE id = ?", (id,))

    entity = cursor.fetchone()

    if entity is None:
        cursor.close()
        db.close()
        raise ValueError(f"No project found with id: {id}")

    found_item = ItemModel(id=entity[0], name=entity[1], project_notes=entity[2], timer=entity[3], progress=entity[4], description=entity[5])

    cursor.close(), db.close()

    return found_item
          
def update(item: ItemModel):
    db = sqlite3.connect('Projects.db')
    cursor = db.cursor()
    cursor.execute( 
        "UPDATE Projects SET name = ?, project_notes = ?, timer = ?, progress = ?, description = ? WHERE id = ?",(item.name, item.project_notes, item.timer, item.progress, item.description, item.id))
    db.commit()

def delete(item_id:int):
    open_or_create_Items_table()
    db = sqlite3.connect('Projects.db')
    cursor = db.cursor()

    cursor.execute( f"DELETE FROM Projects WHERE id = ?", (item_id,))
    db.commit()