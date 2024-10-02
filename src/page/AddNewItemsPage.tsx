import React, {useState} from 'react';
import {RightOutlined} from "@ant-design/icons";

interface AddNewItemsPageProps {
    darkTheme: boolean; // Add this prop
    collapsed: boolean; // Add this prop
}

/*function Dashboard({ darkTheme,collapsed }: DashboardProps) {*/
const AddNewItemsPage: React.FC<AddNewItemsPageProps> = ({darkTheme, collapsed}) => {
    const [itemCode, setItemCode] = useState<string>('');
    const [itemName, setItemName] = useState<string>('');
    const [itemDescription, setItemDescription] = useState<string>('');
    const [itemCategory, setItemCategory] = useState<string>('');
    const [sellingPrice, setSellingPrice] = useState<number | ''>(''); // Allow for empty state

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            itemCode,
            itemName,
            itemDescription,
            itemCategory,
            sellingPrice,
        });
        // Reset form if needed
    };
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    width: collapsed ? 'calc(100% - 150px)' : 'calc(100% - 320px)',
                    maxWidth: '100%',
                    background: darkTheme ? '#181a1e' : 'white',
                    borderRadius: '10px',
                    top: '90px',
                    left: collapsed ? '110px' : '290px',
                    right: '20px', // Add right to ensure proper spacing on smaller screens
                    boxShadow: '0 0 28px rgba(0, 0, 0, .08)',
                    transition: 'all 0.3s ease', // Adds a smooth transition when resizing
                }}
            >
                <div style={{margin: '20px', width: '100%'}}>
                    <h4 style={{
                        fontWeight: 'bold',
                        color: darkTheme ? '#989595' : 'black',
                        textAlign: 'start'
                    }}>Items</h4>
                    <h6 style={{textAlign: 'start', color: darkTheme ? '#989595' : 'black'}}>
                        Home <RightOutlined/> <span
                        style={{color: darkTheme ? '#00a0dd' : '#00a0dd'}}>Add New Items</span>
                    </h6>
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    width: collapsed ? 'calc(100% - 150px)' : 'calc(100% - 320px)',
                    maxWidth: '100%',
                    background: darkTheme ? '#181a1e' : 'white',
                    borderRadius: '10px',
                    top: '210px',
                    left: collapsed ? '110px' : '290px',
                    right: '20px', // Add right to ensure proper spacing on smaller screens
                    boxShadow: '0 0 28px rgba(0, 0, 0, .08)',
                    transition: 'all 0.3s ease', // Adds a smooth transition when resizing
                }}
            >


                <div style={{padding: '20px', width: '100%', textAlign: 'start'}}>
                    <h4 style={{color: darkTheme ? '#989595' : 'black'}}>Add New Items</h4>

                    <div style={{padding: '20px', width: '100%', textAlign: 'center'}}>
                        {/* Preview the selected image */}
                        {selectedImage && (
                            <div>
                                <h5 style={{color: darkTheme ? '#989595' : 'black'}}>Preview</h5>
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Selected"
                                    style={{
                                        maxWidth: '200px',
                                        maxHeight: '200px',
                                        borderRadius: '10px',
                                        marginTop: '10px',
                                    }}
                                />
                            </div>
                        )}
                        <br/>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{
                                display: 'none', // Hide the default file input
                            }}
                            id="fileInput" // Associate the label with the input
                        />
                        <label
                            htmlFor="fileInput" // This allows clicking the label to open the file dialog
                            style={{
                                display: 'inline-block',
                                padding: '10px 15px',
                                background: darkTheme ? '#25252c' : 'white',
                                color: darkTheme ? '#989595' : 'black',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                border: `1px solid ${darkTheme ? '#555' : '#ccc'}`, // Optional border
                            }}
                        >
                            Choose Image
                        </label>
                    </div>

                    <form onSubmit={handleSubmit} className='addnewimageform'>
                        <div className="form-group">
                            <label htmlFor="itemsCode" style={{color: darkTheme ? '#989595' : 'black'}}>Item Code</label>
                            <input
                                className="form-control"
                                type="text"
                                id="itemsCode"
                                style={{
                                    color: darkTheme ? '#989595' : 'black',
                                    background: darkTheme ? '#25252c' : 'white'
                                }}
                                value={itemCode}
                                onChange={(e) => setItemCode(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="itemsName" style={{color: darkTheme ? '#989595' : 'black'}}>Item Name</label>
                            <input
                                className="form-control"
                                type="text"
                                id="itemsName"
                                value={itemName}
                                style={{
                                    color: darkTheme ? '#989595' : 'black',
                                    background: darkTheme ? '#25252c' : 'white'
                                }}
                                onChange={(e) => setItemName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="itemsDescription" style={{color: darkTheme ? '#989595' : 'black'}}>Item
                                Description</label>
                            <input
                                className="form-control"
                                type="text"
                                id="itemsDescription"
                                value={itemDescription}
                                style={{
                                    color: darkTheme ? '#989595' : 'black',
                                    background: darkTheme ? '#25252c' : 'white'
                                }}
                                onChange={(e) => setItemDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="itemCategory" style={{color: darkTheme ? '#989595' : 'black'}}>Item
                                Category</label>
                            <input
                                className="form-control"
                                type="text"
                                id="itemCategory"
                                value={itemCategory}
                                style={{
                                    color: darkTheme ? '#989595' : 'black',
                                    background: darkTheme ? '#25252c' : 'white'
                                }}
                                onChange={(e) => setItemCategory(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="itemsSellingPrice" style={{color: darkTheme ? '#989595' : 'black'}}>Selling
                                Price</label>
                            <input
                                className="form-control"
                                type="number"
                                id="itemsSellingPrice"
                                value={sellingPrice}
                                style={{
                                    color: darkTheme ? '#989595' : 'black',
                                    background: darkTheme ? '#25252c' : 'white'
                                }}
                                onChange={(e) => setSellingPrice(e.target.value ? parseFloat(e.target.value) : '')} // Parse to float or reset to empty
                            />
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <button type="submit" className="btn btn-primary" style={{width: '150px'}} id="addItem">
                                Add
                            </button>
                        </div>
                    </form>

                </div>
            </div>


        </div>

    )
        ;
}

export default AddNewItemsPage
