import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { db, ref, onValue } from "../../Firebase.jsx"

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [thumbnail, setThumbnail] = useState(null)

  useEffect(() => {
    const productRef = ref(db, `Products/${id}`)
    onValue(productRef, (snapshot) => {
      const data = snapshot.val()
      console.log("DATA:", data)
      setProduct(data)
      if (data?.images?.length > 0) {
        setThumbnail(data.images[0])
      } else if (data?.product_picture) {
        setThumbnail(data.product_picture)
      }
    })
  }, [id])

  if (!product) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', fontSize: '16px', color: '#888' }}>
      Loading...
    </div>
  )

  const images = product.images || (product.product_picture ? [product.product_picture] : [])
  const name = product.proName || product.name || 'No Name'
  const price = product.price || 0
  const offerPrice = product.offerPrice || price
  const category = product.category || ''
  const rating = product.rating || 0
  const description = Array.isArray(product.description)
    ? product.description
    : product.desc
      ? [product.desc]
      : []

  return (
    <div style={{ maxWidth: '1000px', margin: '30px auto', padding: '0 24px', fontFamily: 'sans-serif' }}>

      <p style={{ fontSize: '13px', color: '#888', marginBottom: '20px' }}>
       <Link to={-1} style={{color:"#6366f1",textDecoration:"none"}}>
       Products</Link>{category} /
        <span style={{ color: '#6366f1' }}> {name}</span>
      </p>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>

        <div style={{ display: 'flex', gap: '12px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setThumbnail(img)}
                style={{
                  width: '64px', height: '64px', objectFit: 'cover',
                  borderRadius: '8px', cursor: 'pointer',
                  border: thumbnail === img ? '2px solid #6366f1' : '2px solid #e5e7eb',
                  boxShadow: thumbnail === img ? '0 0 0 3px #e0e7ff' : 'none',
                  transition: 'border 0.2s'
                }}
              />
            ))}
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', width: '320px', height: '320px' }}>
            <img
              src={thumbnail || 'https://via.placeholder.com/320?text=No+Image'}
              alt={name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '260px' }}>

          <h1 style={{ fontSize: '26px', fontWeight: '600', margin: '0 0 8px', color: '#111' }}>{name}</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '20px' }}>
            {Array(5).fill('').map((_, i) => (
              <span key={i} style={{ fontSize: '20px', color: i < rating ? '#6366f1' : '#d1d5db' }}>★</span>
            ))}
            <span style={{ fontSize: '13px', color: '#888', marginLeft: '6px' }}>({rating})</span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            {offerPrice < price && (
              <p style={{ fontSize: '13px', color: '#aaa', textDecoration: 'line-through', margin: '0 0 4px' }}>
                MRP: Rs {price}
              </p>
            )}
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#111', margin: '0 0 4px' }}>
              Price : Rs {offerPrice}
            </p>
            <span style={{ fontSize: '12px', color: '#aaa' }}>inclusive of all taxes</span>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #f0f0f0', margin: '16px 0' }} />

          {/* Description */}
          {description.length > 0 && (
            <>
              <p style={{ fontWeight: '600', fontSize: '14px', marginBottom: '8px', color: '#333' }}>About Product</p>
              <ul style={{ paddingLeft: '18px', color: '#666', fontSize: '14px', lineHeight: '1.8' }}>
                {description.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </>
          )}

          <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
            <button style={{
              flex: 1, padding: '12px', borderRadius: '8px',
              border: '1px solid #6366f1', background: '#fff',
              color: '#6366f1', fontSize: '14px', fontWeight: '600', cursor: 'pointer'
            }}>
              Add to Cart
            </button>
            <button style={{
              flex: 1, padding: '12px', borderRadius: '8px',
              border: 'none', background: '#6366f1',
              color: '#fff', fontSize: '14px', fontWeight: '600', cursor: 'pointer'
            }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails



