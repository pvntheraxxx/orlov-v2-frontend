import React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const Cart = ({ open, onClose, items = [], onRemoveItem }) => {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return <></>;
};

export default Cart;
