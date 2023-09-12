$SUBSCRIPTION_NAME="Cortana Israel Dev"
$ACR_NAME="hackathon23"
$IMAGE_NAME="hackathon23/excalidraw:avigithub"

az login
az acr login --name $ACR_NAME
az account set --subscription $SUBSCRIPTION_NAME
az acr build --registry $ACR_NAME --image "$ACR_NAME.azurecr.io/$IMAGE_NAME" .


# Create KeyVault
$RES_GROUP="avdigmi-Hackathon23"
$AKV_NAME="$ACR_NAME-vault"
az keyvault create --resource-group $RES_GROUP --name $AKV_NAME

# Deploy from the Portall...